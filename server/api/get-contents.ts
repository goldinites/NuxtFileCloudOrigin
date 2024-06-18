export default defineEventHandler((): Content[] => {
    return [
        {
            id: 1,
            name: 'Папка 1',
            type: 'folder',
            url: '/papka-1',
            order: 0,
            folder_id: null,
            empty: false,
        },
        {
            id: 2,
            name: 'Папка 2',
            type: 'folder',
            url: '/papka-2',
            order: 1,
            folder_id: null,
            empty: true,
        },
        {
            id: 3,
            name: 'Картинка',
            type: 'image',
            url: '/demo/cat.png',
            order: 2,
            folder_id: null
        },
        {
            id: 4,
            name: 'Документ',
            type: 'file',
            url: '/file.docx',
            order: 3,
            folder_id: null
        },
        {
            id: 5,
            name: 'Видео Видео Видео Видео',
            type: 'video',
            url: '/demo/vid.mp4',
            order: 4,
            folder_id: null
        },
        {
            id: 6,
            name: 'Аудио',
            type: 'audio',
            url: '/audio.mp3',
            order: 5,
            folder_id: null
        },
        // {
        //     id: 1,
        //     name: 'Папка 1',
        //     type: 'folder',
        //     url: '/papka-1',
        //     order: 0,
        //     folder_id: null,
        //     empty: false,
        // },
        // {
        //     id: 1,
        //     name: 'Папка 2',
        //     type: 'folder',
        //     url: '/papka-2',
        //     order: 1,
        //     folder_id: null,
        //     empty: true,
        // },
        // {
        //     id: 2,
        //     name: 'Картинка',
        //     type: 'image',
        //     url: '/demo/cat.png',
        //     order: 2,
        //     folder_id: null
        // },
        // {
        //     id: 3,
        //     name: 'Документ',
        //     type: 'file',
        //     url: '/file.docx',
        //     order: 3,
        //     folder_id: null
        // },
        // {
        //     id: 4,
        //     name: 'Видео Видео Видео Видео',
        //     type: 'video',
        //     url: '/demo/vid.mp4',
        //     order: 4,
        //     folder_id: null
        // },
        // {
        //     id: 5,
        //     name: 'Аудио',
        //     type: 'audio',
        //     url: '/audio.mp3',
        //     order: 5,
        //     folder_id: null
        // },
        // {
        //     id: 1,
        //     name: 'Папка 1',
        //     type: 'folder',
        //     url: '/papka-1',
        //     order: 0,
        //     folder_id: null,
        //     empty: false,
        // },
        // {
        //     id: 1,
        //     name: 'Папка 2',
        //     type: 'folder',
        //     url: '/papka-2',
        //     order: 1,
        //     folder_id: null,
        //     empty: true,
        // },
        // {
        //     id: 2,
        //     name: 'Картинка',
        //     type: 'image',
        //     url: '/demo/cat.png',
        //     order: 2,
        //     folder_id: null
        // },
        // {
        //     id: 3,
        //     name: 'Документ',
        //     type: 'file',
        //     url: '/file.docx',
        //     order: 3,
        //     folder_id: null
        // },
        // {
        //     id: 4,
        //     name: 'Видео Видео Видео Видео',
        //     type: 'video',
        //     url: '/demo/vid.mp4',
        //     order: 4,
        //     folder_id: null
        // },
        // {
        //     id: 5,
        //     name: 'Аудио',
        //     type: 'audio',
        //     url: '/audio.mp3',
        //     order: 5,
        //     folder_id: null
        // },
    ]
})
