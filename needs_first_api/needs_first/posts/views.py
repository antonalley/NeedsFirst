from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer
# Create your views here.


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def list(self, request):
        category = request.GET.get('category', None)
        if category is not None:
            self.queryset = self.queryset.filter(category=category)
        id_ = request.GET.get('id', None)
        if id_ is not None:
            self.queryset = self.queryset.filter(id=id_)
        return super().list(request)
