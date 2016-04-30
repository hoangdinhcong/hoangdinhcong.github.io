 (function($, api) {

     $(document).ready(function() {
         $.each(api, function( key, val) {

            console.log('key: '+key);
            console.log('val: '+val);
            


             // var $header = $('<h2 />');
             // $header.text(section);
             // $d.append($header);

             // var $list = $('<ul />');
             // $.each(config, function(route, des) {
             //     var $li = $('<li />');
             //     var $route = $('<span />');
             //     $route.text(route);
             //     $route.append(': ' + des.description);
             //     $li.append($route);

             //     // simple doc
             //     var params = des.params || [];
             //     $li.append('<br />');
             //     $li.append(params.join('<br />'));
             //     $list.append($li);

             //     var response = des.response;
             //     var $resp = $('<pre />');
             //     $resp.html(JSON.stringify(response));
             //     $li.append($resp);

             //     if (des.role) {
             //         $li.addClass('role-' + des.role);
             //     }
             // });

             // $d.append($list);

             // $d.append('<hr />');
         });
     });
 })(jQuery, {
     "glossary": {
         "title": "example glossary",
         "GlossDiv": {
             "title": "S",
             "GlossList": {
                 "GlossEntry": {
                     "ID": "SGML",
                     "SortAs": "SGML",
                     "GlossTerm": "Standard Generalized Markup Language",
                     "Acronym": "SGML",
                     "Abbrev": "ISO 8879:1986",
                     "GlossDef": {
                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
                         "GlossSeeAlso": ["GML", "XML"]
                     },
                     "GlossSee": "markup"
                 }
             }
         }
     },
     "glossary2": {
         "title": "example glossary",
         "GlossDiv": {
             "title": "S",
             "GlossList": {
                 "GlossEntry": {
                     "ID": "SGML",
                     "SortAs": "SGML",
                     "GlossTerm": "Standard Generalized Markup Language",
                     "Acronym": "SGML",
                     "Abbrev": "ISO 8879:1986",
                     "GlossDef": {
                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
                         "GlossSeeAlso": ["GML", "XML"]
                     },
                     "GlossSee": "markup"
                 }
             }
         }
     }
 });
