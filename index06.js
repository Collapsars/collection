import cheerio from 'cheerio';
import request from 'superagent';
import fs from 'fs';

import models from './models/index';

const getData = async(str) => {
  let result = await request.get(str);
  return result.text;
}


models.Article.findAll({}).then((result) => {
  result.forEach(elem => {
    // body...
    //console.log("message",elem.path);

    getData("http://www.runoob.com/"+elem.path).then((html) => {
        const $ = cheerio.load(html);
        $('.main a').each((index,ele) => {
          //console.log("$(ele)",$(ele).attr('href'));

          var patt1=new RegExp("^/try/","i");
          if(patt1.test($(ele).attr('href'))){
            getData("http://www.runoob.com"+$(ele).attr('href')).then((result) => {
                handerData01(cheerio.load(result),"http://www.runoob.com"+$(ele).attr('href'))
            })
            //console.log("message",$(ele).attr('href'));
          }

        })
    })
  });
});


const handerData01 = async($,urlvalue) => {
  //const $h = cheerio.load(str);
  //console.log("message",$.html());

  let content = $(".panel-body").html();

  //console.log(tryArr);

  let pathArray = urlvalue.split("/");
  let path =pathArray[pathArray.length - 2] +"/" + pathArray[pathArray.length - 1];
  // //console.log(path[path.length - 1]);
   await models.Article.create({content:content,path:path});



}
