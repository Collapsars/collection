import cheerio from 'cheerio';
import request from 'superagent';
import fs from 'fs';

import models from './models/index';

// const url = [
//   'http://www.runoob.com/html/html-tutorial.html',
//   'http://www.runoob.com/html/html-intro.html'
// ]

// let url = [];

// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('./data/08.txt')
// });

// lineReader.on('line', function (line) {
//   url.push(line);
//   console.log('Line from file:', line);
//   console.log('Line from file:', url);
// });


const url = ['http://www.runoob.com/html/html-tutorial.html',
  'http://www.runoob.com/html/html-intro.html',
  'http://www.runoob.com/html/html-editors.html',
  'http://www.runoob.com/html/html-basic.html',
  'http://www.runoob.com/html/html-elements.html',
  'http://www.runoob.com/html/html-attributes.html',
  'http://www.runoob.com/html/html-headings.html',
  'http://www.runoob.com/html/html-paragraphs.html',
  'http://www.runoob.com/html/html-formatting.html',
  'http://www.runoob.com/html/html-links.html',
  'http://www.runoob.com/html/html-head.html',
  'http://www.runoob.com/html/html-css.html',
  'http://www.runoob.com/html/html-images.html',
  'http://www.runoob.com/html/html-tables.html',
  'http://www.runoob.com/html/html-lists.html',
  'http://www.runoob.com/html/html-blocks.html',
  'http://www.runoob.com/html/html-layouts.html',
  'http://www.runoob.com/html/html-forms.html',
  'http://www.runoob.com/html/html-iframes.html',
  'http://www.runoob.com/html/html-colors.html',
  'http://www.runoob.com/html/html-colornames.html',
  'http://www.runoob.com/html/html-colorvalues.html',
  'http://www.runoob.com/html/html-scripts.html',
  'http://www.runoob.com/html/html-entities.html',
  'http://www.runoob.com/html/html-url.html',
  'http://www.runoob.com/html/html-quicklist.html',
  'http://www.runoob.com/html/html-summary.html',
  'http://www.runoob.com/html/html-xhtml.html',
  'http://www.runoob.com/html/html5-intro.html',
  'http://www.runoob.com/html5-browsers.html',
  'http://www.runoob.com/html/html5-new-element.html',
  'http://www.runoob.com/html/html5-canvas.html',
  'http://www.runoob.com/html/html5-svg.html',
  'http://www.runoob.com/html5-mathml.html',
  'http://www.runoob.com/html/html5-draganddrop.html',
  'http://www.runoob.com/html/html5-geolocation.html',
  'http://www.runoob.com/html/html5-video.html',
  'http://www.runoob.com/html/html5-audio.html',
  'http://www.runoob.com/html/html5-form-input-types.html',
  'http://www.runoob.com/html/html5-form-elements.html',
  'http://www.runoob.com/html/html5-form-attributes.html',
  'http://www.runoob.com/html/html5-semantic-elements.html',
  'http://www.runoob.com/html/html5-webstorage.html',
  'http://www.runoob.com/html5-web-sql.html',
  'http://www.runoob.com/html/html5-app-cache.html',
  'http://www.runoob.com/html/html5-webworkers.html',
  'http://www.runoob.com/html/html5-serversentevents.html',
  'http://www.runoob.com/html/html5-websocket.html',
  'http://www.runoob.com/quiz/html5-quiz.html',
  'http://www.runoob.com/html/html5-syntax.html',
  'http://www.runoob.com/html/html-media.html',
  'http://www.runoob.com/html/html-object.html',
  'http://www.runoob.com/html/html-sounds.html',
  'http://www.runoob.com/html/html-videos.html',
  'http://www.runoob.com/html/html-examples.html',
  'http://www.runoob.com/tags/html-reference.html',
  'http://www.runoob.com/tags/ref-byfunc.html',
  'http://www.runoob.com/tags/ref-standardattributes.html',
  'http://www.runoob.com/tags/ref-eventattributes.html',
  'http://www.runoob.com/tags/ref-canvas.html',
  'http://www.runoob.com/tags/ref-av-dom.html',
  'http://www.runoob.com/tags/html-elementsdoctypes.html',
  'http://www.runoob.com/tags/html-colorname.html',
  'http://www.runoob.com/tags/html-colorpicker.html',
  'http://www.runoob.com/charsets/html-charsets.html',
  'http://www.runoob.com/tags/html-ascii.html',
  'http://www.runoob.com/tags/ref-entities.html',
  'http://www.runoob.com/tags/html-symbols.html',
  'http://www.runoob.com/tags/html-urlencode.html',
  'http://www.runoob.com/tags/html-language-codes.html',
  'http://www.runoob.com/tags/html-httpmessages.html',
  'http://www.runoob.com/tags/html-httpmethods.html',
  'http://www.runoob.com/tags/html-keyboardshortcuts.html'];



const getData = async (str) =>{
   let result = await  request.get(str);
   //console.log(result.text);
   return  result.text;
}


const handerData = async (value) =>{
    //console.log(data);
    try {

    // 读取网页 保存到txt
      const html = await getData(value);
    // await  fs.writeFile(`./data/${value}.txt`,html);


      //const html = await fs.readFileSync('./data/03.txt','utf-8');
      //console.log("html",html);
      let $ =cheerio.load(html);
      $('script').remove();
      $(".fivecol").remove();
      $('ins').remove();
    //  console.log($('script').remove());

      //let items = [];
    //  $ = $('script').remove();
    //  console.log("script",$.html());
      let content = $('.main').html();
      //console.log("a",a);

      let pathArray = value.split("/");
      let path = pathArray[pathArray.length - 1];
      //console.log(path[path.length - 1]);      
      await models.Article.create({content:content,path:path});
      //fs.appendFileSync('./data/04.txt',a);
      //console.log("a",a);

    } catch (e) {
      console.log("e",e);
    } finally {


    }

}

console.log("test");

url.map((value) => {
  //console.log("value",value);
  handerData(value);
})




//handerData(getData());
