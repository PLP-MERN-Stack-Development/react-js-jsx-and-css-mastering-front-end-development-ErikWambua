// src/api/englishPosts.js
export const englishPostsAPI = {
  async getPosts(page = 1, limit = 8) {
    // Mock English data for demonstration
    const englishPosts = [
      {
        id: 1,
        userId: 1,
        title: "Getting Started with React Development",
        body: "Learn the fundamentals of React including components, props, state, and hooks. This guide will help you build your first React application with modern best practices."
      },
      {
        id: 2,
        userId: 1,
        title: "Mastering Tailwind CSS for Beautiful UIs",
        body: "Discover how to use Tailwind CSS to create responsive and modern user interfaces without writing custom CSS. Utility-first approach makes styling efficient."
      },
      {
        id: 3,
        userId: 2,
        title: "The Future of Web Development in 2024",
        body: "Explore the latest trends in web development including AI integration, Web3 technologies, and new frameworks that are shaping the future of the web."
      },
      {
        id: 4,
        userId: 2,
        title: "Building RESTful APIs with Node.js",
        body: "A comprehensive guide to creating robust REST APIs using Node.js, Express, and MongoDB. Learn about authentication, error handling, and deployment."
      },
      {
        id: 5,
        userId: 3,
        title: "JavaScript ES6+ Features You Should Know",
        body: "Deep dive into modern JavaScript features like arrow functions, destructuring, async/await, and modules that make coding more efficient and readable."
      },
      {
        id: 6,
        userId: 3,
        title: "Responsive Design Principles",
        body: "Learn how to create websites that work perfectly on all devices using CSS Grid, Flexbox, and responsive units. Mobile-first approach explained."
      },
      {
        id: 7,
        userId: 4,
        title: "Introduction to TypeScript",
        body: "Why TypeScript is becoming essential for modern web development. Learn about types, interfaces, and how TypeScript prevents common JavaScript errors."
      },
      {
        id: 8,
        userId: 4,
        title: "State Management in React Applications",
        body: "Compare different state management solutions like Context API, Redux, Zustand, and Recoil. Choose the right tool for your React project."
      },
      {
        id: 9,
        userId: 5,
        title: "Web Performance Optimization Techniques",
        body: "Learn how to optimize your web applications for faster loading times, better user experience, and improved SEO rankings."
      },
      {
        id: 10,
        userId: 5,
        title: "Git and GitHub Best Practices",
        body: "Master version control with Git and collaborate effectively using GitHub. Learn about branching strategies, pull requests, and code reviews."
      },
      {
        id: 11,
        userId: 6,
        title: "Testing React Applications",
        body: "Comprehensive guide to testing React components with Jest and React Testing Library. Learn unit testing, integration testing, and best practices."
      },
      {
        id: 12,
        userId: 6,
        title: "Deployment Strategies for Modern Web Apps",
        body: "Explore different deployment options for React applications including Vercel, Netlify, AWS, and traditional web servers."
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Paginate the mock data
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = englishPosts.slice(startIndex, endIndex);
    
    return {
      posts: paginatedPosts,
      totalPages: Math.ceil(englishPosts.length / limit),
      currentPage: page
    };
  }
};