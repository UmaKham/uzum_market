import axios from 'axios'

let base_url = 'http://localhost:8080'

export const getData = async (resource) => {
  try{
      const res = await axios(base_url + resource)
      
      return res
  } catch(e) {
      console.log(e);
  }
}