// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components

// Material Kit 2 React components
import TransparentBlogCard from "../blogs/TransparentBlogCard";
import BackgroundBlogCard from "../blogs/BackgroundBlogCard";

// Images
import post1 from "../../../assets/images/examples/instaDrink.png";
import post2 from "../../../assets/images/examples/yourLifeCard.png";
import post3 from "../../../assets/images/examples/MedSolution.png";
import post4 from "../../../assets/images/examples/blog2.jpg";

import { Box, Typography } from "@mui/material";

function Places(): JSX.Element {
  return (
    <Box component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <Typography variant="h3" mb={6}>
            Check my latest blogposts
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Insta Drink "
              description="Tired of waiting or queuing to order (at your favorite establishment)? 
              your ordeal ends here and now. Thanks to the Instadrink mobile application you can, from your smartphone, instantly consult the menu of the establishment you are in, order and pay without ever having 
              to queue or wait again. “Life is too short to wait” so hurry up and download it and join the movement"
              action={{
                type: "internal",
                route:
                  "https://play.google.com/store/apps/details/Instadrink?id=com.food.instadrink&pli=1",
                color: "info",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Your Life Card"
              description="The easiest way to connect with your audience and fans offline. Equipped with NFC technology to tap on-the-go."
              action={{
                type: "internal",
                route: "https://www.yourlifecard.com/sign-up",
                color: "info",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Med solution"
              description="When it comes to today’s healthcare staffing challenges,
               there’s no such thing as a “one-size-fits-all” solution. That’s why Medical Solutions is keeping healthcare more human
               with comprehensive healthcare staffing services for hospitals and medical facilities nationwide."
              action={{
                type: "internal",
                route:
                  "https://www.medicalsolutions.com/our-workforce-solutions/",
                color: "info",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place.
              We deliver the work directly to you."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Places;
