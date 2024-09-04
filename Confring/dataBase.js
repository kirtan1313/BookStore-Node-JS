const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mkirtan013:<db_password>@cluster0.egcsg.mongodb.net/Expense-tracker')
  .then(() => console.log('Data base is Connected Successfully....')).catch((err)=>{
    console.log('Database conectivity is faild..!',err);
  });

  