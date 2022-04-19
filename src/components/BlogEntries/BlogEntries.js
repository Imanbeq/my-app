import React from "react";
import BlogEntry from "../BlogEntry/BlogEntry";

const BlogEntries = () => {
    return (
        <div className="w3-col l8 s12">
            <BlogEntry
                imgUrl="https://habrastorage.org/webt/mn/es/dq/mnesdqdj71e0lbeisai6qbmuwro.jpeg"
                title="Яндекс выложил в опенсорс YDB"
                tags="Блог компании, Флант, Kubernetes, *DevOps, *IT-инфраструктура, *Open source,*"
                date="20.07.2020"
                desc="Сегодня мы выложили в опенсорс систему управления базами данных YDB — плод многолетнего опыта Яндекса в разработке систем хранения и обработки данных. Исходный код, документация, SDK и все инструменты для работы с базой опубликованы на GitHub под лицензией Apache 2.0."
                countCommenst="5"
            />

        </div>
    )
}

export default BlogEntries;