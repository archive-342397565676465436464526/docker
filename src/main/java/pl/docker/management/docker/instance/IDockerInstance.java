package pl.docker.management.docker.instance;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.core.DockerClientBuilder;
import org.springframework.stereotype.Component;

@Component
public interface IDockerInstance {

    default DockerClient getDockerClient(){
        return DockerClientBuilder.getInstance().build();
    }
}
