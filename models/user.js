const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  FirstName: String,
  LastName: String,
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    minlength: 5
  },
  Email: String,
  IsSuperAdmin: Boolean,
  IsMessageAdmin: Boolean,
  CreateDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


// UserSchema.set('toJSON', {
//   transform(doc, ret, opt) {
//     delete ret.Password;
//     return ret;
//   }
// });

UserSchema.methods = {
  getTokenPayload() {
    const user = this;
    return {
      type: 'admin_panel_user',
      id: user.id,
      firstName: user.FirstName,
      lastName: user.LastName,
      username: user.Username,
      isSuperAdmin: user.IsSuperAdmin,
      email: user.Email,
      isMessageAdmin: user.IsMessageAdmin
    };
  }
};


module.exports = mongoose.model('User', UserSchema);
