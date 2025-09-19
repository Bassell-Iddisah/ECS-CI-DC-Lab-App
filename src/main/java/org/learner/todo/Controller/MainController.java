package org.learner.todo.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;


@Controller
@RequestMapping("/")
public class MainController {

    @GetMapping()
    public String index() {
        return "redirect:/index.html";
    }

    @GetMapping("ping")
    public String ping(Model model) {
        model.addAttribute("message", "pong");
        return "ping";
    }
}