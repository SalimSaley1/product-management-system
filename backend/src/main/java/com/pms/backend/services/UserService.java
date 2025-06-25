package com.pms.backend.services;

import com.pms.backend.dtos.LoginRequest;
import com.pms.backend.dtos.RegisterRequest;
import com.pms.backend.dtos.Response;
import com.pms.backend.dtos.UserDTO;
import com.pms.backend.entities.User;

public interface UserService {
    Response registerUser(RegisterRequest registerRequest);

    Response loginUser(LoginRequest loginRequest);

    Response getAllUsers();

    User getCurrentLoggedInUser();

    Response getUserById(Long id);

    Response updateUser(Long id, UserDTO userDTO);

    Response deleteUser(Long id);

    Response getUserTransactions(Long id);
}
