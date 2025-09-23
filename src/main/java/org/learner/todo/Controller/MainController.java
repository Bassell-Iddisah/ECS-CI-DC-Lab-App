package org.learner.todo.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;


@Controller
@RequestMapping("/")
public class MainController {

    @GetMapping("index")
    public String index() {
        return "redirect:/cicd-lab.html";
    }

    @GetMapping("photo-upload")
    public String photo() {
        return "redirect:/photo-upload.html";
    }
}