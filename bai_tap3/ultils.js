
const myFetch = (link,option,obj) => {
   return fetch(link, {
      method:option,
      headers: {
         'Content-Type': 'application/json'
      },
      body: option==='GET' ? undefined : JSON.stringify(obj ? obj : {})
   })
   .then(res => res.json())
}


const clearNoteDetail = () => {
   document.getElementById("input_note_title").value = "";
   document.getElementById("input_note_content").value = "";
}

const openDetailModal = () => {
   document.getElementById("input_note_cover").classList.add("hiden");
   document.getElementById("detail_note").innerHTML = displayDetailNoteModal();
   document.getElementById("close_detail_modal").addEventListener("click", closeDetailModal);
   isOpen = true;
}

const closeDetailModal = () => {
   clearNoteDetail();
   if (isAdd) {
      document.getElementById("input_note_cover").classList.remove("hiden");
      document.getElementById("detail_note").innerHTML = "";
      isAdd = false;
   } else {
      document.getElementById("detail_edit_note_content").innerHTML = "";
      document.getElementById("detail_edit_note_wrap").classList.add("hiden");
   }
   isOpen = false;
}

const getValueFromNoteDetail = () => {
   let title = document.getElementById("input_note_title").value;
   let content = document.getElementById("input_note_content").value;
   let noteLabelId=null;
   const note = {
      title,
      content,
      noteLabelId
   }
   return note;
}

const setValueToDetailNote = editObj => {
   let { title, content } = editObj;
   document.getElementById("note_title").value = title;
   document.getElementById("note_content").value = content;
}


/*------------Labels------------*/

const closeRemoveConfirmModal = () => {
   removeLabelConf.classList.add("hiden");
   removeLabelWrap.classList.add("hiden");
}
const openRemoveConfirmModal = () => {
   removeLabelConf.classList.remove("hiden");
   removeLabelWrap.classList.remove("hiden");
}

const displayLabelList = () => {
   displaySidebarLabel();
   displayEditLabelList();
}

const clearEditLabelInput = () => {
   document.getElementById("input_new_label").value = "";
}

const closeEditLabelBtn = () => {
   btnLeftLabel.classList.add("hiden");
   btnRightLabel.classList.add("hiden");
   clearEditLabelInput();
}

const getValueFromLabelModal = () => {
   const name = document.getElementById("input_new_label").value;
   const label = {
      name
   }
   return label;
}

const openEditLabelBtn = () => {
   btnLeftLabel.classList.remove("hiden");
   btnRightLabel.classList.remove("hiden");
   btnLeftLabel.addEventListener("click", closeEditLabelBtn);
   btnRightLabel.addEventListener("click", handleAddNewLabel);
}

const closeEditLabelModal = () => {
   editContentLabel.classList.add("hiden");
   editWrapLabel.classList.add("hiden");
}

const openEditLabelModal = () => {
   editContentLabel.classList.remove("hiden");
   editWrapLabel.classList.remove("hiden");
   document.getElementById("input_new_label").addEventListener("click", openEditLabelBtn);
   document.getElementById("btn_done_edit_modal").addEventListener("click", closeEditLabelModal);
   displayEditLabelList();
   editWrapLabel.addEventListener("click", closeEditLabelModal);
}

const handleEditLabelToSaveBtn = () => {
   document.querySelectorAll(".edit-label-name").forEach(node => {
      if (parseInt(node.id.slice(9)) === editLabelId) {
         node.classList.remove("hiden");
         node.addEventListener("click", handleEditLabel);
      } else {
         node.classList.add("hiden");
      }
   })
}