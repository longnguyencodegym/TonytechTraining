let notes = [];
let isOpen = false;
let editId = null;
let editLabelId = null;
let isAdd = false;
let isOption = false;
let menuBtnStatus = false;
let labels = [];
const btnLeftLabel = document.getElementById("btn_left_input_edit_label");
const btnRightLabel = document.getElementById("btn_right_input_edit_label");
const editContentLabel = document.getElementById("detail_edit_label_content");
const editWrapLabel = document.getElementById("detail_edit_label_wrap");
const removeLabelConf = document.getElementById("remove_label_confirm_modal");
const removeLabelWrap = document.getElementById("remove_label_wrap");
const editLabelConf = document.getElementById("edit_label_confirm_modal");
const editLabelWrap = document.getElementById("edit_label_wrap");
let currentLabelId = null;
let labelId = null;
let filterList = [];
let isFilter = false;
let labelIdSidebar=null;
let oldLabelName= null;
let url="http://localhost:3000";
const NOTI_NOT_FOUND = "Nothing to show!"
