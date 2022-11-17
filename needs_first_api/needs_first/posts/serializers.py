from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = (
            'image',
            'category',
            'buy_price',
            'title',
            'description',
            'rent_price_six',
            'rent_price_twelve',
            'owner_name',
            'owner_number',
            'city',
            'id',
        )