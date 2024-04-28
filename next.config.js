/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    // Other Next.js configurations...
  
    // Enable static HTML export
    async generateStaticParams() {
      // Define the static paths for your application
      const paths = [
        { params: { slug: 'page-1' } },
        { params: { slug: 'page-2' } },
        // Add additional paths as needed
      ];
  
      // Return the static paths
      return {
        paths,
        // Fallback: false means any path not returned by getStaticPaths will 404.
        fallback: false,
      };
    },
  };
  