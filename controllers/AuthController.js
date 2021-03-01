const models = require('../database/models');
const Employee = models.Employee;
const Office = models.Office;
const loginPage = (req, res, next) => {
    try {
        return res.render("admin/login");
    } catch (err) {
        console.log("loginPage -> err", err);
        return res.status(500).json({ message: "Interal server error" });
    }
};

const handleLogin = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.render('admin/login', { errorMessage: "Please enter both email and password" });
    };
    try {
        const employee = await Employee.findOne({
            attributes: ['id', 'name', 'officeID', 'role'],
            include: Office,
            where: req.body
        });

        // If the user was not found that means the credentials was wrong.
        if (!employee) {
            return res.render('admin/login', { errorMessage: "Wrong email or password" });
        }
        req.session.employee = employee;

        if (employee.Office.name == 'ATN') {
            return res.render('admin/ATN/', { employee: employee });
        }

        return res.render('admin/Store/', { employee: employee });
    } catch (error) {
        console.log(error);
    }
}

const checkLogin = (req, res) => {
    if (req.session.employee) {
        next();     //If session exists, proceed to page
    } else {
        return res.render('admin/login', { errorMessage: "You must login first" });
    }
}

const logout = (req, res) => {
    req.session.destroy(function () {
        console.log("user logged out.")
    });
    res.render('admin/login');
}

const registerPage = (req, res, next) => {
    try {
        return res.render("auth/register");
    } catch (err) {
        console.log("registerPage -> err", err);
        return res.status(500).json({ message: "Interal server error" });
    }
};

const _404Page = (req, res, next) => {
    try {
        return res.render("errors/404");
    } catch (err) {
        return res.status(500).json({ message: "Interal server error" });
    }
}

const _403Page = (req, res, next) => {
    try {
        return res.render("errors/403");
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const _500Page = (req, res, next) => {
    try {
        return res.render("errors/500");
    } catch (err) {
        return res.status.json({ message: "Internal server error" });
    }
}

module.exports = {
    loginPage,
    handleLogin,
    checkLogin,
    logout,
    registerPage,
    _404Page,
    _403Page,
    _500Page,
};
