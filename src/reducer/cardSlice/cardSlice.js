import { createSlice } from '@reduxjs/toolkit'
import { data } from 'autoprefixer'



export const cardSlice = createSlice({
  name: 'card',
  initialState : {
    data : [
        {
            id : "1",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home1",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "active"
        },
        {
            id : "2",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home2",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "inactive"
        },
        {
            id : "3",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home3",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "inactive"
        },
        {
            id : "4",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home4",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "active"
        },
        {
            id : "5",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home5",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "active"
        },
        {
            id : "6",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Hom6",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "inactive"
        },
        
    ],
    data2 : [
        {
            id : "1",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home1",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "active"
        },
        {
            id : "2",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home2",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "inactive"
        },
        {
            id : "3",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home3",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "inactive"
        },
        {
            id : "4",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home4",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "active"
        },
        {
            id : "5",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Home5",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "active"
        },
        {
            id : "6",
            img : "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" ,
            title : "Hom6",
            desc : "Строительство — это динамично развивающаяся отрасль, которая играет ключевую роль в развитии общества. ",
            status : "inactive"
        },
        
    ],

    idx : null,
    sarch : "",
    

    addDialog : false,
    addimg : "",
    addtitle : "",
    addtext : "",

    editDialog : false ,
    editimg : "",
    edittitle : "",
    edittext : "",

  },
  reducers: {
    deleteUser : (state , action) =>{
        state.data = state.data.filter((elem) =>{
            return elem.id != action.payload
        })
        state.data2 = state.data2.filter((elem) =>{
            return elem.id != action.payload
        })
    },
    checkCard : (state , action) =>{
        state.idx = action.payload
        state.data.map((elem) =>{
            if(elem.id == action.payload){
                return elem.status = elem.status == "active" ? "inactive" : "active"
            }
            return elem
        })
        state.data2.map((elem) =>{
            if(elem.id == action.payload){
                return elem.status = elem.status == "active" ? "inactive" : "active"
            }
            return elem
        })
    },
    sarchCard : (state , action ) =>{
        state.sarch = action.payload
    },
    allSelects : (state ) =>{
        state.data = state.data2
        console.log("hamash");
    },
    activeSelects : (state) =>{
        state.data = state.data2.filter((elem) =>{
            return elem.status == "active"
        })
    },
    inactiveSelects : (state) =>{
        state.data = state.data2.filter((elem) =>{
            return elem.status == "inactive"
        })
    },
    open_close_add : (state , action) =>{
        state.addDialog = action.payload
    },
    inpImg : (state , action) =>{
        state.addimg = action.payload
    }, 
    inpTitle : (state , action) =>{
        state.addtitle = action.payload
    },
    inpText : (state , action) =>{
        state.addtext = action.payload
    },
    AddCard : (state , action) =>{
        state.data.push(action.payload),
        console.log(action.payload);
        state.addimg = '',
        state.addtitle = '',
        state.addtext = ''
        state.addDialog = false
    },

    open_close_edit : (state , action) =>{
        state.editDialog = action.payload[0]
        state.editimg = action.payload[1].img
        state.edittitle = action.payload[1].title
        state.edittext = action.payload[1].desc
        state.idx = action.payload[1].id
    },
    // Idx : (state , action) =>{
    //     // state.idx = action.payload
    //     console.log(action.payload);
    // },
    editImg : (state , action) =>{
        state.editimg = action.payload
    },
    editTitle : (state , action) =>{
        state.edittitle = action.payload
    },
    editText : (state , action) =>{
        state.edittext = action.payload
    },
    edit_dial : (state , action) =>{
        console.log(state.idx);
        state.data.map((elem) =>{
            if(elem.id == state.idx){
                elem.id = state.idx,
                elem.title = state.edittitle
                elem.desc = state.edittext
            }
            
        })
        state.editDialog = false
    }


  },
})


export const { deleteUser , checkCard , sarchCard , allSelects , activeSelects , inactiveSelects , open_close_add , inpImg , Idx , inpTitle ,inpText , AddCard  , open_close_edit , edit_dial , editImg , editTitle , editText} = cardSlice.actions

export default cardSlice.reducer