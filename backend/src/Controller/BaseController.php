<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Annotation\Route;

final class BaseController extends AbstractController
{
    #[Route('/send-message', name: 'publish')]
    public function __invoke(HubInterface $hub, Request $request): Response
    {
        $update = new Update(
            'https://example.com/conversation/1',
            $request->getContent()
        );

        $hub->publish($update);

        return new Response('Published!');
    }
}