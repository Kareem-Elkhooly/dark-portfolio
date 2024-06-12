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
});