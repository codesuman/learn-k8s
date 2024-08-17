package com.example.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @RestController = @Controller + @ResponseBody
 */
@RestController
@RequestMapping("/api/catalog")
public class CatalogController {
    @GetMapping("/")
    public String getAllProducts(){
        return "Products Listing..!!";
    }
}