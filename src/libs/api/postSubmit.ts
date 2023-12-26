import axios from "axios";

const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

const postSubmit = async (
  _name: string,
  _email: string,
  _zipCode: string,
  _phoneNumber: string,
  _retailCategory: string,
  _cameraNetwork: string,
  _employeesNum: string
) => {
  console.log(
    _name,
    _email,
    _zipCode,
    _phoneNumber,
    _retailCategory,
    _cameraNetwork,
    _employeesNum
  );

  try {
    const response = await axios.post(
      `https://t3p13jzsjj.execute-api.ap-northeast-2.amazonaws.com/allevier-subscribe-api`,
      {
        name: _name,
        email: _email,
        zipCode: _zipCode,
        phone: _phoneNumber,
        retailCategory: _retailCategory,
        cameraNetwork: _cameraNetwork,
        employeeCount: _employeesNum,
      }
    );

    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export default postSubmit;
