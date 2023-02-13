import { getProject, updateProject } from "../api/project";
import { useEffect, router, useState } from "../lib";

const AdminProjectEditPage = (params ) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(params));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("project-name");
        const projectAuthor = document.getElementById("project-author");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const formData = {
                    id:params,
                    name: projectName.value,
                    author: projectAuthor.value,
                };
                await updateProject(formData);
                router.navigate("/admin/projects");
            } catch (error) {
                console.log(error);
            }
        });
    });
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Ten Dự án</label>
                    <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Tác giả</label>
                    <input type="text" class="form-control" id="project-author" value="${project.author}" />
                </div>
                <button class="btn btn-primary">Thêm dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;