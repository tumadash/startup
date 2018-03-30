package startup.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import startup.entity.Port;
import startup.service.PortService;

import java.util.Map;
import java.util.Objects;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping("/port")
public class PortController {
    private final PortService portService;

    @Autowired
    public PortController(PortService portService) {
        this.portService = portService;
    }

    @RequestMapping(method = POST)
    public ResponseEntity<Long> createPort(@RequestBody Port port) {
        return new ResponseEntity<>(portService.createPort(port), HttpStatus.OK);
    }

       @RequestMapping(method = GET)
    public ResponseEntity<Map<Long, Port>> getAllPort() {
        return new ResponseEntity<>(portService.getAllPort(), HttpStatus.OK);
    }
    @RequestMapping(value = "run/{size}", method = GET)
    public ResponseEntity<Object> run(@PathVariable int size) {
        return new ResponseEntity(portService.run(size),HttpStatus.OK);
    }


    @RequestMapping(value = "{id}", method = GET)
    public ResponseEntity<Port> getPort(@PathVariable Long id) {
        return new ResponseEntity<>(portService.getPort(id), HttpStatus.OK);
    }

    @RequestMapping(value = "{id}", method = DELETE)
    public ResponseEntity<Object> deletePort(@PathVariable Long id) {
        portService.deletePort(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}