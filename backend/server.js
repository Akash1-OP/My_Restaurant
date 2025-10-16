import app from './app.js';

app.listen(process.env.port, () =>{
  console.log('Server Running On Port ${process.env.Port}');
})



// import app from './app.js';

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server Running On Port ${PORT}`);
// });