const path = require('path');
const TaskController = require('../controllers/TaskController.js');

module.exports = function(app){
app.get('/api/tasks', TaskController.all);
app.post('/api/tasks', TaskController.create);
app.get('/api/tasks/:id', TaskController.findById);
app.put('/api/tasks/:id', TaskController.update);
app.delete('/api/tasks/:id', TaskController.delete);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));

})
} 