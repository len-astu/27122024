const fs = require("fs");
const path = require("path");

// Define the project structure
const projectStructure = {
  "ecommerce-project": {
    backend: {
      models: ["user.js", "product.js", "order.js"],
      routes: [
        "authRoutes.js",
        "productRoutes.js",
        "orderRoutes.js",
        "userRoutes.js",
      ],
      controllers: [
        "authController.js",
        "productController.js",
        "orderController.js",
        "userController.js",
      ],
      middleware: ["authMiddleware.js", "errorHandler.js"],
      utils: ["redisClient.js", "emailService.js"],
      files: ["server.js", ".env"],
    },
    frontend: {
      public: ["index.html", "favicon.ico"],
      src: {
        components: ["Navbar.js", "Footer.js", "ProductCard.js"],
        pages: ["Home.js", "Login.js", "Register.js", "ProductDetails.js"],
        context: ["AuthContext.js"],
        utils: ["api.js"],
        files: ["App.js", "index.js", "styles.css"],
      },
      files: ["package.json", "vite.config.js"],
    },
    files: ["README.md"],
  },
};

// Function to create folders and files
const createStructure = (basePath, structure) => {
  for (const [key, value] of Object.entries(structure)) {
    const currentPath = path.join(basePath, key);

    if (typeof value === "object" && !Array.isArray(value)) {
      // Create directory
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
      }
      // Recursively create structure inside
      createStructure(currentPath, value);
    } else if (Array.isArray(value)) {
      // Create files in the directory
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath, { recursive: true });
      }
      value.forEach((file) => {
        const filePath = path.join(currentPath, file);
        if (!fs.existsSync(filePath)) {
          fs.writeFileSync(filePath, "", "utf8");
        }
      });
    } else {
      // Create standalone files
      const filePath = path.join(basePath, value);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "", "utf8");
      }
    }
  }
};

// Create the structure in the current directory
const baseDirectory = process.cwd();
createStructure(baseDirectory, projectStructure);

console.log("Project structure created successfully!");
