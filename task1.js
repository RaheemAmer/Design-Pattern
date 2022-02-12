function authUser(req, user) {
    const validateReq = validateRequest(req);
    const userRes = validateUser(user);

    console.log(validateReq, "---------------", userRes);
}

function validateRequest(request) {
    if (request.header === "token") {
        return "ok valid request";
    }

    return "not valid";
}

function validateUser(userTarget) {
    const users = ["Raheem", "Amer", "Yasser"];
    let result = "";
    users.forEach((user) => {
        if (user === userTarget) {
            result = "user exist";
        }
    });

    return result || "no such user";
}

const req = {
    header: "token",
};

authUser(req, "Raheem");