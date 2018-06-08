import $ from "jquery";

export function getEventHeadache (event) {
   var form = new FormData();
        form.append("idx", "0");
        form.append("answer", "头痛");

        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://api.qiyan.tech/",
        "method": "POST",
        "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
        "Postman-Token": "cf244424-203e-4c6f-9a14-525225ef6cfc"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
        }

    function unicodeToChar(text) {
       return text.replace(/\\u[\dA-F]{4}/gi, 
              function (match) {
                   return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
              });
    }
	return (dispatch, getState) => {
        dispatch({type:'LOADING'})
		return $.ajax(settings).done(data => {
            console.log(data);
            console.log(unicodeToChar(data));
            dispatch({type:'GET_DATA', data:data})
    }).fail(xhr => {
        dispatch({type:'FAILED'})
    })
  }
}

