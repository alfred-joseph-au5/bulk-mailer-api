const createProfile = (req, res) => {
    
}

const getProfileInfo = (req, res) => {
    res.status(200).json({
        msg : 'User Profile'
    });
}


const updateProfile = (req, res) => {

}

const deleteProfile = (req, res) => {

}

module.exports = {
    createProfile,
    getProfileInfo,
    updateProfile,
    deleteProfile
}