export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // the body will send like this to backend
      body: JSON.stringify(body),
    });

    const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
  } catch (error) {
    console.error(`error in fetch api `, error);
  }
};

export const makeUnauthenticatedGETRequest = async (route) => {
  try {
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
  } catch (error) {
    console.error(`error in fetch api `, error);
  }
};

export const makeAuthenticatedGETRequest = async (token , route) => {
  const response = await fetch(route , {
    method : 'GET' ,
    headers : {
      'Authorization': `bearer ${token}`
    },
  });
   const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
}

export const makeAuthenticatedPOSTRequest = async (token ,route,body) => {
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
  } catch (error) {
    console.error(`error in fetch api `, error);
  }
}

export const makeAuthenticatedPATCHRequest = async (token , route , body) => {
  try {
    const response = await fetch(route, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
  } catch (error) {
    console.error(`error in fetch api `, error);
  }
}

export const makeAuthenticatedDELETERequest = async (token , route ) => {
  try {
    const response = await fetch(route, {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
  } catch (error) {
    console.error(`error in fetch api `, error);
  }
}
export const makeAuthenticatedPOSTFILERequest = async (token, route, body) => {
  // form data debug ke liye
  for (let pair of body.entries()) {
    if (pair[1] instanceof File) {
      const fileURL = URL.createObjectURL(pair[1]);
      console.log(
        `Key: ${pair[0]}, File Name: ${pair[1].name}, File URL: ${fileURL}`
      );
    } else {
      console.log(`Key: ${pair[0]}, Value: ${pair[1]}`);
    }
  }

  console.log("frontend me body", body);
  
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
      },
      body: body, // FormData directly pass kar rahe hain
    });

    const formattedResponse = await response.json();
    const status = response.status;
    const data = { data: formattedResponse, status: status };
    return data;
  } catch (error) {
    console.error(`error in fetch api `, error);
  }
};
