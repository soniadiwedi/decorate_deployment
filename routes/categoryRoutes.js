
const {isAdmin, requireSignIn} =require("../middlewares/authMiddleware")
const express=require('express')
const {createCategoryController,updateCategoryController, deleteCategoryController, categoryController, singleCategoryController}=require("../controllers/categoryController")
const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController

);

//getALl category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

module.exports={router}
