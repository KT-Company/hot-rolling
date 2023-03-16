import type { MockMethod } from "vite-plugin-mock";
// const arr: any = [];
const arr = []
for (let index = 0; index < 20; index++) {
    arr.push({
        customer_name: "wade",
        status_text: "登录成功",
        os: "Windows 10",
        browser: "Chrome(99.0.4844.51)",
        ip: "192.168.9.110",
        created: "2021-12-14 10:41:02",
        location: "局域网 局域网",
    });
}

const logList = {
    total: 31,
    page: 1,
    page_size: 20,
    list: arr,
};

const statusList = {
    data: { label: "全部", value: 0 },
    number: 10
};

// export default [
//     {
//         url: "/api/getList",
//         method: "post",
//         response: () => {
//             return logList;
//         },
//     },
//     {
//         url: "/api/getStatusList",
//         method: "get",
//         response: () => {
//             return statusList;
//         },
//     },
// ] as MockMethod[];


const data = {
    data: { label: "全部", value: 0 },
    number: 10
}


export default [
    {
        type: "post",
        url: "/user/login",
        response: () => {
            return { isAuth: true };
        },
    },
    {
        url: "/api/getList",
        method: "get",
        response: () => {
            return data
        },
    },
    {
        url: "/api/getStatusList",
        method: "get",
        response: () => {
            return statusList;
        },
    },
    {
        url: "/api/getBist",
        method: "get",
        response: () => {
            return logList;
        },
    },
];