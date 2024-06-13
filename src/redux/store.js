<<<<<<< HEAD
import {configureStore} from "@reduxjs/toolkit";
import globalInfosSlice from "./slices/globalInfo-slice";
import arInfosSlice from "./slices/infoAr-slice";
import enInfosSlice from "./slices/infoEn-slice";
import projectsSlice from "./slices/projects-slice";
import quickprojectsSlice from "./slices/quickProjects-slice";
import featuredSlice from "./slices/featured-slice";
import messagesSlice from "./slices/messages-slice";
import adminsSlice from "./slices/admins-slice";


export const store = configureStore({
    reducer: {
        globalInfo:globalInfosSlice,
        arInfo:arInfosSlice,
        enInfo:enInfosSlice,
        projects:projectsSlice,
        quickProjects:quickprojectsSlice,
        featured:featuredSlice,
        messages:messagesSlice,
        admins:adminsSlice,
    },
=======
import {configureStore} from "@reduxjs/toolkit";
import globalInfosSlice from "./slices/globalInfo-slice";
import arInfosSlice from "./slices/infoAr-slice";
import enInfosSlice from "./slices/infoEn-slice";
import projectsSlice from "./slices/projects-slice";
import quickprojectsSlice from "./slices/quickProjects-slice";
import featuredSlice from "./slices/featured-slice";
import messagesSlice from "./slices/messages-slice";
import adminsSlice from "./slices/admins-slice";


export const store = configureStore({
    reducer: {
        globalInfo:globalInfosSlice,
        arInfo:arInfosSlice,
        enInfo:enInfosSlice,
        projects:projectsSlice,
        quickProjects:quickprojectsSlice,
        featured:featuredSlice,
        messages:messagesSlice,
        admins:adminsSlice,
    },
>>>>>>> e6d09d87138c8831d65985f9ddb935cd4913205b
});