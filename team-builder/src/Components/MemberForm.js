import React, { useState } from 'react';

export default function MemberForm(props) {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  function handleChange(event) {
    const updatedTeam = { ...member, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedTeam
    );
    setMember(updatedTeam);
	};  

  function handleSubmit(event) {
      event.preventDefault();
      console.log("member", member);
      setMember({ name: "", email: "", role: "" });
      {props.add(member)};
  }

    return (
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
            <div className="signup-header">
                <legend>Signup</legend>
            </div>
                <div className="form-group row">
                    <label for="name" className="column-sm-2 col-form-label">
                        Name
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Please enter your name"
                                value={member.name}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                </div>
                <div className="form-group">
                    <label for="email" className="column-sm-2 col-form-label">
                        Email Address
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="Please enter your email"
                                value={member.email}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                </div>
                <div className="form-group">
                    <label for="role" className="column-sm-2 col-form-label">
                        Role
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="role"
                                placeholder="What is your desired role?"
                                value={member.role}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
          </fieldset>
      </form>
    );
}