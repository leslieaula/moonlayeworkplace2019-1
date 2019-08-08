import Request from "./Request";
import URI from "../config/Uri"

class EmployeeResource {
  async getEmployee(){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }
    let res = await Request.get(URI.API_BASE_URL + URI.ENDPOINT_GET_EMPLOYEE, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async getEmployeeById(employeeId){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_GET_EMPLOYEE_BY_ID.replace(/{(employeeId)}/, employeeId)
    let res = await Request.get(endPoint, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async getEmployeeDtoById(employeeId){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_GET_EMPLOYEE_DTO_BY_ID.replace(/{(employeeId)}/, employeeId)
    let res = await Request.get(endPoint, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async editEmployee(body, employeeId){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_PUT_EMPLOYEE.replace(/{(employeeId)}/, employeeId)
    let res = await Request.put(endPoint, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }
}

export default new EmployeeResource();