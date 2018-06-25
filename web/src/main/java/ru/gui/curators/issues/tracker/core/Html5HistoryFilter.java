package ru.gui.curators.issues.tracker.core;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter(urlPatterns = "/ui/*")
public class Html5HistoryFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) { }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        request.getRequestDispatcher("/index.html").forward(request, response);
    }

    @Override
    public void destroy() { }
}