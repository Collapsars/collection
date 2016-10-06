import cheerio from 'cheerio';
import request from 'superagent';
import fs from 'fs';

const url = 'http://www.runoob.com/html/html-tutorial.html'

const getData = async () =>{
   let result = await  request.get(url);
   //console.log(result.text);
   return  result.text;
}


const handerData = async () =>{
    //console.log(data);
    try {

    // 读取网页 保存到txt
    //  const html = await getData();
    //  await  fs.writeFile('./data/03.txt',html);


      const html = await fs.readFileSync('./data/03.txt','utf-8');
      //console.log("html",html);
      let $ =cheerio.load(html);
      $('script').remove();
      $('ins').remove();
    //  console.log($('script').remove());

      //let items = [];
    //  $ = $('script').remove();
    //  console.log("script",$.html());
      let a = $('.main').html();

      fs.appendFileSync('./data/04.txt',a);
      console.log("a",a);

    } catch (e) {
      console.log("e",e);
    } finally {


    }

}


handerData();
//handerData(getData());
