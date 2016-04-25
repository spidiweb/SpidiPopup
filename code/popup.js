var PopupType = ["alert", "confirm"];
var properties = {};
properties.HeaderText = "";
properties.BodyText = "";
properties.HtmlModeEnabled = false;
properties.PopupType = PopupType[0];
properties.width = 400;
properties.height = 200;
properties.autoSize = true;
properties.okButtonTest = "OK";
properties.CancelButtonTest = "CANCEL";


function popup(properties) {
    var baseNode = document.createElement("div");
    baseNode.className = "spidi-customPopup";
    var header = document.createElement("div");
    header.className = "spidi-customPopup-header";
    baseNode.appendChild(header);
    var body = document.createElement("div");
    body.className = "spidi-customPopup-body";
    baseNode.appendChild(header);
    var controlWrapper = document.createElement("div");
    controlWrapper.className = "spidi-customPopup-ControlWrapper";
    if (!IsNullOrEmptyOrUndefined(properties)) {
        switch (properties.PopupType) {
            case "alert":
                var ok = document.createElement("button");
                ok.className = "spidi-customPopup-Control-ok";
                controlWrapper.appendChild(ok);
                break;
            case "confirm":
                var ok = document.createElement("button");
                ok.className = "spidi-customPopup-Control-ok";
                controlWrapper.appendChild(ok);
                var cancel = document.createElement("button");
                cancel.className = "spidi-customPopup-Control-cancel";
                controlWrapper.appendChild(cancel);
                break;
            // case "alert":
            //     break;
        }
    }
    else {
        var ok = document.createElement("button");
        ok.className = "spidi-customPopup-Control-ok";
        controlWrapper.appendChild(ok);
        baseNode.appendChild(header);
    }
    
    // baseNode.appendChild(header);


    var popupHTML = "<div class='spidi-customPopup'><div class='spidi-customPopup-header'></div>" +
        "<div class='spidi-customPopup-body'></div><div class='spidi-customPopup-controls'></div><div class='spidi-customPopup-footer'></div></div>";

}

/******************************************Supporter Functions******************************************/
function IsNullOrEmptyOrUndefined(value) {
    if (value == null || value == '' || value == [] || value == {} || value == undefined)
        return true;
    else
        return false;
}