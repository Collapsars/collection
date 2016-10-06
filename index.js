import cheerio from 'cheerio';
import request from 'superagent';
import fs from 'fs';

const url = 'http://www.runoob.com/sitemap'

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
    //  await  fs.writeFile('./data/01.txt',html);


      const html = await fs.readFileSync('./data/01.txt','utf-8');
      //console.log("html",html);
      const $ =cheerio.load(html);

      //let items = [];
      $('.sitemap li a').each((index,ele) => {
        let $ele = $(ele);
        //console.log("index",index);
        fs.appendFileSync('./data/02.txt',$ele.attr('href')+'\n');

        //items.push($ele.attr('href'));
        //console.log("ele",$ele.attr('href'));
      });
      //console.log("items",items);

    } catch (e) {
      console.log("e",e);
    } finally {


    }

}


handerData();
//handerData(getData());
