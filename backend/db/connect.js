import mongoose from 'mongoose'

const connectDB = (url) => {
  return mongoose.connection(url)
}
export default connectDB
