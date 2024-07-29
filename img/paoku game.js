document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const player = {
        x: 50,
        y: 200,
        width: 20,
        height: 20,
        color: '#ff0',
        gravity: 0.6,
        lift: -15,
        velocity: 0,
        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        },
        update() {
            this.velocity += this.gravity;
            this.y += this.velocity;
            if (this.y + this.height > canvas.height) {
                this.y = canvas.height - this.height;
                this.velocity = 0;
            }
            if (this.y < 0) {
                this.y = 0;
                this.velocity = 0;
            }
        },
        jump() {
            this.velocity = this.lift;
        }
    };

    const obstacles = [];
    const obstacleWidth = 20;
    const obstacleGap = 200;
    let frameCount = 0;

    function drawObstacles() {
        obstacles.forEach(obstacle => {
            ctx.fillStyle = '#0f0';
            ctx.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacle.height);
            obstacle.x -= 2;
        });

        if (frameCount % 90 === 0) {
            const height = Math.random() * (canvas.height / 2);
            obstacles.push({ x: canvas.width, y: canvas.height - height, height });
        }

        obstacles.forEach((obstacle, index) => {
            if (obstacle.x + obstacleWidth < 0) {
                obstacles.splice(index, 1);
            }
        });
    }

    function checkCollision() {
        obstacles.forEach(obstacle => {
            if (
                player.x < obstacle.x + obstacleWidth &&
                player.x + player.width > obstacle.x &&
                player.y < obstacle.y + obstacle.height &&
                player.y + player.height > obstacle.y
            ) {
                alert('Game Over');
                document.location.reload();
            }
        });
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.draw();
        player.update();
        drawObstacles();
        checkCollision();
        frameCount++;
        requestAnimationFrame(gameLoop);
    }

    canvas.addEventListener('click', () => {
        player.jump();
    });

    gameLoop();
});
