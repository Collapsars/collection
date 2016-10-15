import cheerio from 'cheerio';
import request from 'superagent';
import fs from 'fs';

import models from './models/index';


//获取首页的数据
const getData = async(str) => {
  let result = await request.get(str);
  return result.text;
}

let items = [];
const handerData = async(value) => {
  try {
    const html = await getData(value);

    const $ = cheerio.load(html);
    //let items = [];
    $('#leftcolumn a').each((index, ele) => {
      //console.log("$(ele)",$(ele).attr('href'));

    //  items.push("http://www.runoob.com" + $(ele).attr('href'));
      //let $ele = $(ele);
      //console.log("index","http://www.runoob.com"+$(ele).attr('href'));
      //fs.appendFileSync('./data/08.txt',$ele.attr('href')+'\n');
      let pathArray = ("http://www.runoob.com"+$(ele).attr('href')).split("/");
      //console.log("pathArray",pathArray);
      //console.log("message",pathArray.length);

      let path =pathArray[pathArray.length - 2]+"/" + pathArray[pathArray.length - 1];

    //  console.log("path01",path01);

      models.Article.findOne({
        where:{
          path:path
        }
      }).then((result) => {
        if(!result){
          //console.log("message");
            getData("http://www.runoob.com"+$(ele).attr('href')).then((result) =>{

              handerData01(cheerio.load(result),"http://www.runoob.com"+$(ele).attr('href'))

          });
        }
      })




    //items.push($ele.attr('href'));
    //console.log("ele",$ele.attr('href'));
  });
//console.log("items",items);

}
catch (e) {

} finally {


}


}

const handerData01 = async($,urlvalue) => {
  //const $h = cheerio.load(str);
  //console.log("message",$.html());

  $('script').remove();
  $(".fivecol").remove();
  $('ins').remove();
  $('.main a').each((index,ele) => {
  //  if($(ele).attr('href'))
    //console.log($(ele).replace(/^http:\/\/www.runoob.com/i,''));
    let charnge = $(ele).attr('href').replace(/^http:\/\/www.runoob.com/i,'')
    $(ele).attr('href', charnge);
    //console.log($(elee).attr('href'));
  })


   let content = $('.main').html();
   //await  fs.writeFile(`./data/10.txt`,content);
   //console.log("a",content);
  //
  let pathArray = urlvalue.split("/");
  let path =pathArray[pathArray.length - 2] +"/" + pathArray[pathArray.length - 1];
  //console.log(path[path.length - 1]);
  await models.Article.create({content:content,path:path});



}



const indexUrl = "http://www.runoob.com/";
getData(indexUrl).then((indexhtml) => {
  //console.log("indexHtml",data);
  let indexArr = [];
  let $ = cheerio.load(indexhtml);
  $('.item-1').each((index, ele) => {
    indexArr.push($(ele).attr('href'));
    //console.log("href",$(ele).attr('href'));
  });
  return indexArr;
}).then((arr) => {
  //console.log("message",arr);
  arr.map((value) => {
    //console.log("value",value);
     handerData(value);
  })

  //console.log("items", items);

}).then(() => {


});









// url.map((value) => {
//   handerData(value);
// })




//handerData(getData());
