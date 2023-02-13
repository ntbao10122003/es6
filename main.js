import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "./src/lib";


import AdminProjectsPage  from "./src/pages/projects";
import AdminProjectsEditPage from "./src/pages/projects-edit";
import AdminProjectsAdd from "./src/pages/projects-add";
const app = document.querySelector("#app");

router.on("/admin/projects",() =>  render (AdminProjectsPage,app));
router.on("/admin/projectsAdd",() =>  render (AdminProjectsAdd,app));
router.on("/admin/projectsEdit/:id",(params) =>  render (() => AdminProjectsEditPage(params.data.id),app));





router.resolve();