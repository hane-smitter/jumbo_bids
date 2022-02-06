import React from "react";
import {
  Typography,
  Grid,
  CircularProgress,
  Stack,
  Box,
  useMediaQuery,
  ClickAwayListener,
} from "@mui/material";
import {
  Category as CategoryIcon,
  ArrowDropUp as ArrowDropUpIcon,
  RefreshOutlined as RefreshIcon,
} from "@mui/icons-material";
import InfiniteScroll from "react-infinite-scroll-component";
import { decode } from "html-entities";

import Product from "./Product/Product";
import Styled from "./Styled";

const Products = (props) => {
  const {
    updateProducts,
    updateActiveCategory,
    bidProducts: {
      products,
      loading,
      err,
      categories,
      activeCategory,
      pageInfo,
      nextPageToken,
    },
  } = props;

  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [loadMore, setLoadMore] = React.useState(true);
  // console.log("LOADMORE: ", loadMore);

  const fetchMoreProducts = () => {
    updateProducts({ nextPageToken }, "secondary");
  };
  const refreshProducts = () => {
    updateProducts(undefined, undefined, "refresh");
  };

  const handleCategoryClick = () => {
    setCategoryOpen(!categoryOpen);
  };
  const handleCatClickAway = () => {
    setCategoryOpen(false);
  };

  // React.useEffect(() => {}, []);
  React.useEffect(() => {
    if (products?.length && pageInfo?.totalResults) {
      if (products?.length >= pageInfo.totalResults) {
        setLoadMore((_) => false);
      } else {
        setLoadMore((_) => true);
      }
    }
  }, [products, pageInfo?.totalResults]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Styled.CB>
        <ClickAwayListener onClickAway={handleCatClickAway}>
          <Box component="span" sx={{ maxWidth: 300 }}>
            <Styled.CBList
              component="nav"
              aria-labelledby="categories"
              disablePadding
              sx={{ bgcolor: categoryOpen ? "#486391" : "inherit" }}
            >
              <Styled.CBListItem
                sx={{ py: 0.5 }}
                button
                onClick={handleCategoryClick}
              >
                <Styled.CBListItemIcon>
                  <CategoryIcon />
                </Styled.CBListItemIcon>
                <Styled.CBListItemText
                  primary="Browse Categories"
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                  secondary={categories
                    ?.slice(
                      0,
                      Math.ceil(
                        Math.min(Math.max(categories.length * 0.3, 4), 10)
                      )
                    )
                    ?.map((category) => `${decode(category.name)}, `)}
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: categoryOpen
                      ? "rgba(0,0,0,0)"
                      : "rgba(255,255,255,0.5)",
                  }}
                />
                <ArrowDropUpIcon
                  sx={{
                    mr: -1,
                    transform: categoryOpen ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </Styled.CBListItem>
            </Styled.CBList>
            <Styled.CBCollapse in={categoryOpen} timeout="auto" unmountOnExit>
              <Styled.CBList
                sx={{
                  height: "100%",
                  boxSizing: "content-box",
                  overflowY: "auto",
                  padding: "0 20px 0 0",
                }}
                component="div"
              >
                <Styled.CBListItem
                  button
                  onClick={() => {
                    setCategoryOpen(false);
                    updateActiveCategory("All");
                    updateProducts();
                  }}
                >
                  <Styled.CBListItemText primary={"All"} />
                </Styled.CBListItem>
                {categories?.map((category) => (
                  <Styled.CBListItem
                    button
                    key={category._id}
                    onClick={() => {
                      setCategoryOpen(false);
                      updateActiveCategory(
                        decode(category.name),
                        category.category_slug
                      );
                      updateProducts({ category: category.category_slug });
                    }}
                  >
                    <Styled.CBListItemText
                      primary={decode(category.name ? category.name : "")}
                    />
                  </Styled.CBListItem>
                ))}
              </Styled.CBList>
            </Styled.CBCollapse>
          </Box>
        </ClickAwayListener>
      </Styled.CB>

      <InfiniteScroll
        dataLength={products?.length || 0}
        next={fetchMoreProducts}
        style={{ overflowY: "hidden!important" }}
        hasMore={loadMore}
        loader={
          <Stack>
            {loading && (
              <CircularProgress
                disableShrink
                sx={{ color: "secondary.dark", m: "auto" }}
              />
            )}
            {err?.length > 0 && !loading && (
              <Typography variant="body2" sx={{ m: "auto" }}>
                {err[0].msg}
              </Typography>
            )}
          </Stack>
        }
        endMessage={
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.6)",
              userSelect: "none",
            }}
          >
            <strong>More coming soon... 🔥</strong>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refreshProducts}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        releaseToRefreshContent={
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "secondary.light",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "tooltip",
            }}
          >
            <RefreshIcon sx={{ mr: 1 }} /> Release to refresh
          </Typography>
        }
      >
        <Stack sx={{ position: "relative" }}>
          <Typography
            sx={{
              textTransform: "capitalize",
              minHeight: 40,
              m: "auto",
              fontWeight: "fontWeightBold",
              color: "common.black",
              my: 2,
            }}
            variant="h5"
          >
            {!loading
              ? activeCategory?.name === "All"
                ? "all products"
                : activeCategory?.name
              : ""}
          </Typography>
          {products?.length > 0 && loading && (
            <Stack
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: "tooltip",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  height: 34,
                  width: 34,
                }}
              >
                <CircularProgress
                  disableShrink
                  size={"small"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    color: "secondary.dark",
                  }}
                />
              </span>
            </Stack>
          )}
        </Stack>
        {!products?.length || !products[0]?.product ? (
          <Typography
            variant="h5"
            color="textSecondary"
            align="center"
            component="div"
            sx={{
              bgcolor: "background.paper",
              p: 5,
              borderRadius: "4px",
              boxShadow: `inset 0 0 4px 3px hsl(0deg 0% 90%),
              inset 0 0 4px 6px hsl(0deg 0% 90%),
              inset 0 0 1px 7px hsl(0deg 0% 60%)`,
            }}
          >
            Sorry! No Products are available!!
          </Typography>
        ) : (
          <>
            <Grid
              container
              justifyContent={isMobile ? "space-around" : "left"}
              alignItems="stretch"
              spacing={3}
              style={{ marginBlockEnd: 40 }}
            >
              {products?.map((product) => {
                let content = null;
                if (Boolean(product?.product)) {
                  content = (
                    <Grid
                      style={{ maxWidth: 250 }}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={product._id}
                    >
                      <Product product={product} />
                    </Grid>
                  );
                }
                return content;
              })}
            </Grid>
          </>
        )}
      </InfiniteScroll>
    </>
  );
};

export default React.memo(Products);
