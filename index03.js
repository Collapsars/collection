import cheerio from 'cheerio';
import request from 'superagent';
import fs from 'fs';

import models from './models/index';


const getData = async (str) =>{
   let result = await  request.get(str);
   console.log(result.text);
   return  result.text;
}

//getData();
const handerData = async (value) =>{
    //console.log(data);
    try {

    // 读取网页 保存到txt
      const html = await getData(value);
    // await  fs.writeFile(`./data/${value}.txt`,html);


      //const html = await fs.readFileSync('./data/03.txt','utf-8');
      //console.log("html",html);
      let $ =cheerio.load(html);
      //console.log("test");
      //console.log($(".panel-body").html());

      //let items = [];
    //  $ = $('script').remove();
    //  console.log("script",$.html());
  //  console.log($('.main .tryitbtn').attr('href'));
      //console.log("a",a);


      let content = $(".panel-body").html();

      //console.log(tryArr);

       let pathArray = value.split("?");
       let path = pathArray[pathArray.length - 1];
      // //console.log(path[path.length - 1]);
       await models.Article.create({content:content,path:path});
      //fs.appendFileSync('./data/04.txt',a);
      //console.log("a",a);

    } catch (e) {
      console.log("e",e);
    } finally {

    }
}



const tryarray = [
  '/try/try.php?filename=tryhtml_intro',
  '/try/try.php?filename=tryhtml_intro_utf8',
  '/try/try.php?filename=tryhtml_intro',
  '/try/try.php?filename=tryhtml_basic_link',
  '/try/try.php?filename=tryhtml_headers',
  '/try/try.php?filename=tryhtml_paragraphs1',
  '/try/try.php?filename=tryhtml_basic_link',
  '/try/try.php?filename=tryhtml_basic_img',
  '/try/try.php?filename=tryhtml_headers',
  '/try/try.php?filename=tryhtml_hr',
  '/try/try.php?filename=tryhtml_comment',
  '/try/try.php?filename=tryhtml_headers',
  '/try/try.php?filename=tryhtml_comment',
  '/try/try.php?filename=tryhtml_hr',
  '/try/try.php?filename=tryhtml_paragraphs1',
  '/try/try.php?filename=tryhtml_paragraphs0',
  '/try/try.php?filename=tryhtml_paragraphs',
  '/try/try.php?filename=tryhtml_poem',
  '/try/try.php?filename=tryhtml_paragraphs1',
  '/try/try.php?filename=tryhtml_paragraphs',
  '/try/try.php?filename=tryhtml_poem',
  '/try/try.php?filename=tryhtml_paragraphs2',
  '/try/try.php?filename=tryhtml_styles',
  '/try/try.php?filename=tryhtml_style',
  '/try/try.php?filename=tryhtml_linknoline',
  '/try/try.php?filename=tryhtml_link',
  '/try/try.php?filename=tryhtml_bodybgstyle',
  '/try/try.php?filename=tryhtml_bodybgcol',
  '/try/try.php?filename=tryhtml_newfont',
  '/try/try.php?filename=tryhtml_headeralign',
  '/try/try.php?filename=tryhtml_header',
  '/try/try.php?filename=tryhtml_title',
  '/try/try.php?filename=tryhtml_base',
  '/try/try.php?filename=tryhtml_meta',
  '/try/try.php?filename=tryhtml_script',
  '/try/try.php?filename=tryhtml_noscript',
  '/try/try.php?filename=tryhtml_script',
  '/try/try.php?filename=tryhtml_noscript',
  '/try/try.php?filename=tryjs_intro_document_write',
  '/try/try.php?filename=tryjs_intro_event',
  '/try/try.php?filename=tryjs_intro_style',
  '/try/try.php?filename=tryhtml5_audio_all',
  '/try/try.php?filename=tryhtml5_datalist',
  '/try/try.php?filename=tryhtml5_keygen',
  '/try/try.php?filename=tryhtml5_output',
  '/try/try.php?filename=tryhtml5_input_autocomplete',
  '/try/try.php?filename=tryhtml5_form_novalidate',
  '/try/try.php?filename=tryhtml5_input_autofocus',
  '/try/try.php?filename=tryhtml5_input_form',
  '/try/try.php?filename=tryhtml5_input_formaction',
  '/try/try.php?filename=tryhtml5_input_formenctype',
  '/try/try.php?filename=tryhtml5_input_formmethod',
  '/try/try.php?filename=tryhtml5_input_formnovalidate',
  '/try/try.php?filename=tryhtml5_input_formtarget',
  '/try/try.php?filename=tryhtml5_input_height_width',
  '/try/try.php?filename=tryhtml5_datalist',
  '/try/try.php?filename=tryhtml5_input_max_min',
  '/try/try.php?filename=tryhtml5_input_multiple',
  '/try/try.php?filename=tryhtml5_input_pattern',
  '/try/try.php?filename=tryhtml5_input_placeholder',
  '/try/try.php?filename=tryhtml5_input_required',
  '/try/try.php?filename=tryhtml5_input_step',
  '/try/try.php?filename=tryhtml5_html_manifest',
  '/try/try.php?filename=tryhtml_intro',
  '/try/try.php?filename=tryhtml_headers',
  '/try/try.php?filename=tryhtml_paragraphs1',
  '/try/try.php?filename=tryhtml_basic_link',
  '/try/try.php?filename=tryhtml_basic_img',
  '/try/try.php?filename=tryhtml_headers',
  '/try/try.php?filename=tryhtml_comment',
  '/try/try.php?filename=tryhtml_hr',
  '/try/try.php?filename=tryhtml_paragraphs1',
  '/try/try.php?filename=tryhtml_paragraphs2',
  '/try/try.php?filename=tryhtml_paragraphs',
  '/try/try.php?filename=tryhtml_poem',
  '/try/try.php?filename=tryhtml_formattingch',
  '/try/try.php?filename=tryhtml_pre',
  '/try/try.php?filename=tryhtml_computeroutput',
  '/try/try.php?filename=tryhtml_address',
  '/try/try.php?filename=tryhtml_abbr',
  '/try/try.php?filename=tryhtml_bdo',
  '/try/try.php?filename=tryhtml_q',
  '/try/try.php?filename=tryhtml_del',
  '/try/try.php?filename=tryhtml_styles',
  '/try/try.php?filename=tryhtml_bodybgstyle',
  '/try/try.php?filename=tryhtml_newfont',
  '/try/try.php?filename=tryhtml_headeralign',
  '/try/try.php?filename=tryhtml_font-family',
  '/try/try.php?filename=tryhtml_font-size',
  '/try/try.php?filename=tryhtml_color',
  '/try/try.php?filename=tryhtml_fontall',
  '/try/try.php?filename=tryhtml_style',
  '/try/try.php?filename=tryhtml_linknoline',
  '/try/try.php?filename=tryhtml_link',
  '/try/try.php?filename=tryhtml_links',
  '/try/try.php?filename=tryhtml_imglink',
  '/try/try.php?filename=tryhtml_link_target',
  '/try/try.php?filename=tryhtml_link_locations',
  '/try/try.php?filename=tryhtml_frame_getfree',
  '/try/try.php?filename=tryhtml_mailto',
  '/try/try.php?filename=tryhtml_mailto2',
  '/try/try.php?filename=tryhtml_images',
  '/try/try.php?filename=tryhtml_images2',
  '/try/try.php?filename=tryhtml_image_align',
  '/try/try.php?filename=tryhtml_image_float',
  '/try/try.php?filename=tryhtml_imglink',
  '/try/try.php?filename=tryhtml_areamap',
  '/try/try.php?filename=tryhtml_tables',
  '/try/try.php?filename=tryhtml_tables3',
  '/try/try.php?filename=tryhtml_table_headers',
  '/try/try.php?filename=tryhtml_tables2',
  '/try/try.php?filename=tryhtml_table_span',
  '/try/try.php?filename=tryhtml_table_elements',
  '/try/try.php?filename=tryhtml_table_cellpadding',
  '/try/try.php?filename=tryhtml_table_cellspacing',
  '/try/try.php?filename=tryhtml_lists4',
  '/try/try.php?filename=tryhtml_lists',
  '/try/try.php?filename=tryhtml_lists_ordered',
  '/try/try.php?filename=tryhtml_lists_unordered',
  '/try/try.php?filename=tryhtml_lists2',
  '/try/try.php?filename=tryhtml_nestedlists2',
  '/try/try.php?filename=tryhtml_lists3',
  '/try/try.php?filename=tryhtml_input',
  '/try/try.php?filename=tryhtml_inputpassword',
  '/try/try.php?filename=tryhtml_checkbox',
  '/try/try.php?filename=tryhtml_radio',
  '/try/try.php?filename=tryhtml_select2',
  '/try/try.php?filename=tryhtml_select3',
  '/try/try.php?filename=tryhtml_textarea',
  '/try/try.php?filename=tryhtml_button',
  '/try/try.php?filename=tryhtml_legend',
  '/try/try.php?filename=tryhtml_form_submit',
  '/try/try.php?filename=tryhtml_form_checkbox',
  '/try/try.php?filename=tryhtml_form_radio',
  '/try/try.php?filename=tryhtml_form_mail',
  '/try/try.php?filename=tryhtml_iframe',
  '/try/try.php?filename=tryhtml_title',
  '/try/try.php?filename=tryhtml_base',
  '/try/try.php?filename=tryhtml_meta',
  '/try/try.php?filename=tryhtml_script',
  '/try/try.php?filename=tryhtml_noscript',
  '/try/try.php?filename=tryhtml_video_html5_4',
  '/try/try.php?filename=tryhtml_videoembed',
  '/try/try.php?filename=tryhtml_videoobject',
  '/try/try.php?filename=tryhtml_video_html5',
  '/try/try.php?filename=tryhtml_video_html5_4',
  '/try/try.php?filename=tryhtml_videolink',
  '/try/try.php?filename=tryhtml_iframe_height_width',
  '/try/try.php?filename=tryhtml_iframe_frameborder',
  '/try/try.php?filename=tryhtml_iframe_target',
  '/try/try.php?filename=tryhtml_links',
  '/try/try.php?filename=tryhtml_link_target',
  '/try/try.php?filename=tryhtml_imglink',
  '/try/try.php?filename=tryhtml_frame_getfree',
  '/try/try.php?filename=tryhtml_mailto',
  '/try/try.php?filename=tryhtml_mailto2',
  '/try/try.php?filename=tryhtml_formatting',
  '/try/try.php?filename=tryhtml_formattingch',
  '/try/try.php?filename=tryhtml_pre',
  '/try/try.php?filename=tryhtml_computeroutput',
  '/try/try.php?filename=tryhtml_address',
  '/try/try.php?filename=tryhtml_abbr',
  '/try/try.php?filename=tryhtml_bdo',
  '/try/try.php?filename=tryhtml_q',
  '/try/try.php?filename=tryhtml_del',
  '/try/try.php?filename=tryhtml5_video_bear',
  '/try/try.php?filename=tryhtml5_svg_ex',
  '/try/try.php?filename=tryhtml5_canvas_empty',
  '/try/try.php?filename=tryhtml5_canvas_first',
  '/try/try.php?filename=tryhtml5_canvas_tut_path',
  '/try/try.php?filename=tryhtml5_canvas_tut_path2',
  '/try/try.php?filename=tryhtml5_canvas_tut_text',
  '/try/try.php?filename=tryhtml5_canvas_tut_text2',
  '/try/try.php?filename=tryhtml5_canvas_tut_grad',
  '/try/try.php?filename=tryhtml5_canvas_tut_grad2',
  '/try/try.php?filename=tryhtml5_canvas_tut_img',
  '/try/try.php?filename=tryhtml5_sse',
  '/try/try.php?filename=tryhtml5_input_type_color',
  '/try/try.php?filename=tryhtml5_input_type_date',
  '/try/try.php?filename=tryhtml5_input_type_datetime',
  '/try/try.php?filename=tryhtml5_input_type_datetime-local',
  '/try/try.php?filename=tryhtml5_input_type_email',
  '/try/try.php?filename=tryhtml5_input_type_month',
  '/try/try.php?filename=tryhtml5_input_type_number',
  '/try/try.php?filename=tryhtml5_form_number_adv',
  '/try/try.php?filename=tryhtml5_input_type_range',
  '/try/try.php?filename=tryhtml5_input_type_search',
  '/try/try.php?filename=tryhtml5_input_type_tel',
  '/try/try.php?filename=tryhtml5_input_type_time',
  '/try/try.php?filename=tryhtml5_input_type_url',
  '/try/try.php?filename=tryhtml5_input_type_week',
  '/try/try.php?filename=tryhtml5_video_all',
  '/try/try.php?filename=tryhtml5_video_js_prop',
  '/try/try.php?filename=tryhtml_pulpitimage',
  '/try/try.php?filename=tryhtml_images',
  '/try/try.php?filename=tryhtml_images2',
  '/try/try.php?filename=tryhtml_image_align',
  '/try/try.php?filename=tryhtml_image_float',
  '/try/try.php?filename=tryhtml_imglink',
  '/try/try.php?filename=tryhtml_areamap',
  '/try/try.php?filename=tryhtml_lists4',
  '/try/try.php?filename=tryhtml_lists',
  '/try/try.php?filename=tryhtml_lists_ordered',
  '/try/try.php?filename=tryhtml_lists_unordered',
  '/try/try.php?filename=tryhtml_lists2',
  '/try/try.php?filename=tryhtml_nestedlists2',
  '/try/try.php?filename=tryhtml_lists3',
  '/try/try.php?filename=tryhtml_layout_divs',
  '/try/try.php?filename=tryhtml_layout_tables',
  '/try/try.php?filename=tryhtml_layout_divs',
  '/try/try.php?filename=tryhtml_layout_tables',
  '/try/try.php?filename=tryhtml_tables',
  '/try/try.php?filename=tryhtml_tables3',
  '/try/try.php?filename=tryhtml_table_headers',
  '/try/try.php?filename=tryhtml_tables2',
  '/try/try.php?filename=tryhtml_table_span',
  '/try/try.php?filename=tryhtml_table_elements',
  '/try/try.php?filename=tryhtml_table_cellpadding',
  '/try/try.php?filename=tryhtml_table_cellspacing',
  '/try/try.php?filename=tryhtml_input',
  '/try/try.php?filename=tryhtml_inputpassword',
  '/try/try.php?filename=tryhtml_radio',
  '/try/try.php?filename=tryhtml_checkbox',
  '/try/try.php?filename=tryhtml_select2',
  '/try/try.php?filename=tryhtml_select3',
  '/try/try.php?filename=tryhtml_textarea',
  '/try/try.php?filename=tryhtml_button',
  '/try/try.php?filename=tryhtml_legend',
  '/try/try.php?filename=tryhtml_form_submit',
  '/try/try.php?filename=tryhtml_form_checkbox',
  '/try/try.php?filename=tryhtml_form_radio',
  '/try/try.php?filename=tryhtml_form_mail',
  '/try/try.php?filename=tryhtml_syntax_nobody',
  '/try/try.php?filename=tryhtml_syntax_nohead',
  '/try/try.php?filename=tryhtml_syntax_javascript',
  '/try/try.php?filename=tryhtml_colorhex',
  '/try/try.php?filename=tryhtml5_webworker',
  '/try/try.php?filename=tryhtml5_webworker',
  '/try/try.php?filename=tryhtml5_section',
  '/try/try.php?filename=tryhtml5_article',
  '/try/try.php?filename=tryhtml5_nav',
  '/try/try.php?filename=tryhtml5_aside',
  '/try/try.php?filename=tryhtml5_header',
  '/try/try.php?filename=tryhtml5_footer',
  '/try/try.php?filename=tryhtml5_figcaption',
  '/try/try.php?filename=tryhtml5_geolocation',
  '/try/try.php?filename=tryhtml5_geolocation_error',
  '/try/try.php?filename=tryhtml5_geolocation_map',
  '/try/try.php?filename=tryhtml5_geolocation_map_script',
  '/try/try.php?filename=tryhtml5_geolocation_watchposition',
  '/try/try.php?filename=tryhtml5_webstorage_local',
  '/try/try.php?filename=tryhtml5_webstorage_local_clickcount',
  '/try/try.php?filename=tryhtml5_webstorage_session'
];
// const tryarray = [
//   'http://www.runoob.com/try/try.php?filename=tryhtml_intro'
// ]


tryarray.map((value) => {
  handerData("http://www.runoob.com"+value);
  console.log("value","http://www.runoob.com"+value);
});








//handerData(getData());
