import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', async (req, res) =>{
  const initialContent = await serverRender();
  res.render('index',{initialContent});
});

app.get('/data', (req, res)=>{
  res.send(data);
});

app.listen(config.port, function(){
  console.log(`Running on ${config.port}....`);
});

//TEST FUNCTION 
async function getData(req, res){
  try
  {
    const initialContent = await serverRender();
    res.render('index',{initialContent});
  }
  catch(err){
    console.log(err);
  }
}
