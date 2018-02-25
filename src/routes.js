import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

export default [
  {path:'/',component:ShowBlogs},
  {path:'/blog-vue/dist/',component:ShowBlogs},
  {path:'/index',component:ShowBlogs},
  {path:'/add',component:AddBlog},
  {path:'/blog/:id',component:SingleBlog}
]