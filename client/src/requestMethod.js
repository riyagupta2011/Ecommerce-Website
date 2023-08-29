import axios from "axios";
const BASE_URL="http://localhost:5000/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzMyY2VhNjc5N2JkMTQ5M2E4MTVhMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTY0MzM1NCwiZXhwIjoxNjg1OTAyNTU0fQ.klchXAEgqr6tdjd7On8CpNIK72G3K9uP44CgvEN2iL0";
export const publicRequest=axios.create({
    baseURL:BASE_URL,
})
export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});