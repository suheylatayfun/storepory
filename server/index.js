const express = require('express');
const app = express();
const {getStories,addStory,editStory,deleteStory,getAdminStatus,getStory,adminLogin,adminLogout} = require('./controllers/storyController')

app.use(express.json());

//endpoints
app.get('/api/stories',getStories);
app.get("/api/stories/:id", getStory);
app.post('/api/stories', addStory);
app.put('/api/stories/:id',editStory);
app.delete('/api/stories/:id',deleteStory);

//for admin 
app.get('/api/admin',getAdminStatus);
app.put('/api/login', adminLogin);
app.put('/api/logout', adminLogout);


const PORT= 3030;
app.listen(PORT ,console.log(`Server is listening on ${PORT}`))